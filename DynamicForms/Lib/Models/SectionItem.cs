﻿using System.Dynamic;
using DynamicForms.Lib.Interfaces;

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
                case "date":
                    return CreateInputElement("date");
                case "number":
                    return CreateInputElement("number");
                case "memo":
                    return CreateInputElement("memo");
                case "label":
                    return CreateLabelSchema();
            }

            return CreateInputElement("text");
        }
        
        private dynamic CreateLabelSchema()
        {
            dynamic schema = new ExpandoObject();

            schema.element = "input";
            schema.content = "${" + Name + "}";

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