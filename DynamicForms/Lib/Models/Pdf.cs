using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.JsonPatch.Internal;
using Newtonsoft.Json.Linq;
using Xfinium.Pdf;
using Xfinium.Pdf.Core.Security;
using Xfinium.Pdf.FlowDocument;
using Xfinium.Pdf.Graphics;
using Xfinium.Pdf.Graphics.FormattedContent;

namespace DynamicForms.Lib.Models
{
    public class Pdf
    {
        public void Parse(dynamic[] collection)
        {
            foreach (var item in collection)
            {
                var id = Convert.ToInt32(item["id"].ToString());
                var model = item["model"];
                ProcessSection(id, model);
            }
            
            PdfFixedDocument document = new PdfFixedDocument();
            
            PdfPage page = document.Pages.Add();
            // Create a standard font with Helvetica face and 24 point size
            PdfStandardFont helvetica = new PdfStandardFont(PdfStandardFontFace.Helvetica, 24);
            // Create a solid RGB red brush.
            PdfBrush brush = new PdfBrush(PdfRgbColor.Red);
            // Draw the text on the page.
            page.Graphics.DrawString("Hello World", helvetica, brush, 100, 100);
            
            FileStream outStream = File.OpenWrite("./PDFResult/test.pdf");
            document.Save(outStream);    
            outStream.Flush();
        }
        
        private void ProcessSection(int id, JObject values)
        {
            Section section = Form.Instance.Sections.Find(item => item.Id == id);

            List<FieldValue> valuesToProcess = new List<FieldValue>(); 
            
            var properties = values.Properties();
            foreach (var property in properties)
            {
                var key = property.Name;
                var value = values[key].ToString();
                
                FieldValue fv = new FieldValue(key, value);
                valuesToProcess.Add(fv);
            }
            
            section.ToPdf(valuesToProcess);            
        }        
    }
    
}