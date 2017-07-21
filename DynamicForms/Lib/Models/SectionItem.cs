using System.Dynamic;
using DynamicForms.Lib.Interfaces;
using Xfinium.Pdf;
using Xfinium.Pdf.FlowDocument;

namespace DynamicForms.Lib.Models
{
    public class SectionItem: ISectionItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public string DataType { get; set; }
        public object Value { get; set; }

        public void Parse(string csv)
        {
            var result = csv.Split(';');

            Name = result[0];
            Label = result[1];
            DataType = result[2];
        }

        public dynamic ToSchema()
        {
            switch (DataType)
            {
                case "boolean":
                    return CreateBooleanElement();
                case "date":
                    return CreateInputElement("date");
                case "time":
                    return CreateInputElement("time");
                case "number":
                    return CreateInputElement("number");
                case "memo":
                    return CreateInputElement("textarea");
                case "label":
                    return CreateLabelSchema();
                case "heading":
                    return CreateHeadingSchema();
            }

            return CreateInputElement("text");
        }

        public void ToPdf(PdfPage page, PdfFlowTableContent table)
        {
            table.Rows.AddRowWithCells(Label, Value);
        }

        private dynamic CreateBooleanElement()
        {
            dynamic schema = new ExpandoObject();

            schema.element = "checkbox";
            schema.title = Label;
            schema.field = Name;
            
            return schema;
        }
        
        private dynamic CreateLabelSchema()
        {
            dynamic schema = new ExpandoObject();

            schema.element = "input";
            schema.content = "${" + Name + "}";

            return schema;            
        }

        private dynamic CreateHeadingSchema()
        {
            dynamic schema = new ExpandoObject();

            schema.element = "h2";
            schema.content = Name;

            return schema;                        
        }

        private dynamic CreateInputElement(string jsType)
        {
            dynamic schema = new ExpandoObject();
            
            schema.element = "input";
            schema.title = Label;
            schema.field = Name;
            
            schema.attributes = new ExpandoObject();
            schema.attributes.type = jsType;

            return schema;
        }
    }
}