using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.JsonPatch.Internal;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json.Linq;
using Xfinium.Pdf;
using Xfinium.Pdf.Core.Security;
using Xfinium.Pdf.FlowDocument;
using Xfinium.Pdf.Graphics;
using Xfinium.Pdf.Graphics.FormattedContent;

namespace DynamicForms.Lib.Models
{
    /// <summary>
    /// Develop the PDF document for the current selection and values
    /// </summary>
    public class Pdf
    {
        public PdfFixedDocument PdfDocument { get; set; }
        public PdfPage CurrentPage { get; set; }
        
        public Pdf()
        {
            PdfDocument = new PdfFixedDocument();
        }
        
        public void Parse(dynamic[] collection)
        {
            foreach (var item in collection)
            {
                var id = Convert.ToInt32(item["id"].ToString());
                var model = item["model"];
                ProcessSection(id, model);
            }

            Save("./PDFResult/test.pdf");
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
            
            this.CurrentPage = section.ToPdf(valuesToProcess, this.CurrentPage, this.PdfDocument);         
        }

        public void Save(string fileName)
        {
            FileStream stream = File.OpenWrite(fileName);
            PdfDocument.Save(stream);
            stream.Flush();
            stream = null;
        }
    }    
}
