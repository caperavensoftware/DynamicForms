using Microsoft.AspNetCore.Mvc.TagHelpers;
using Xfinium.Pdf;
using Xfinium.Pdf.FlowDocument;
using Xfinium.Pdf.Graphics;

namespace DynamicForms.Lib.Models
{
    public static class PdfHelper
    {
        public static void AddHeader(PdfPage page, PdfFixedDocument document, string heading, int fontSize = 18)
        {
            PdfStandardFont titleFont = new PdfStandardFont(PdfStandardFontFace.HelveticaBold, fontSize);
            PdfBrush blackBrush = new PdfBrush(new PdfRgbColor());
            
            page.Graphics.DrawString(heading, titleFont, blackBrush, 20, 50);
        }
    }
}