﻿using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text.RegularExpressions;
using DynamicForms.Lib.Interfaces;
using Newtonsoft.Json;
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
        public int DetailId { get; set; }
        public int DefaultDetailRowCount { get; set; }
        public object Value { get; set; }

        public void Parse(string csv)
        {
            var result = csv.Split(';');

            Name = result[0];
            Label = result[1];
            DataType = result[2];

            if (DataType == "detail")
            {
                DetailId = Convert.ToInt32(result[3]);
                DefaultDetailRowCount = 0;

                if (result.Length > 4)
                {
                    DefaultDetailRowCount = Convert.ToInt32(result[4]);
                }
            }   
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
                    return CreateMemoElement();
                case "label":
                    return CreateLabelSchema();
                case "heading":
                    return CreateHeadingSchema();
                case "group":
                    return CreateGroupSchema();
                case "detail":
                    return CreateDetailSchema();
                case "endgroup":
                    return CreateEndGroupSchema();
            }

            return CreateInputElement("text");
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
            schema.content = Label;

            return schema;                        
        }

        private dynamic CreateMemoElement()
        {
            dynamic schema = new ExpandoObject();

            schema.element = "memo";
            schema.title = Label;
            schema.field = Name;
            
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

        private dynamic CreateGroupSchema()
        {
            dynamic schema = new ExpandoObject();

            schema.element = "group";
            schema.title = Label;
            
            return schema;
        }

        private dynamic CreateEndGroupSchema()
        {
            dynamic schema = new ExpandoObject();
            schema.element = "endgroup";
            return schema;
        }

        private dynamic CreateDetailSchema()
        {
            var childSchema = GenericFormMain.Instance.CurrentProject.Section(DetailId);
            var childrenSchema = childSchema.ToSchema();
            var childrenObject = JsonConvert.DeserializeObject(childrenSchema);
            var datasource = Regex.Replace(childSchema.Name, @"\s+", "").ToLower();
            
            dynamic schema = new ExpandoObject();

            schema.id = DetailId;
            schema.element = "details";
            schema.datasource = datasource;
            schema.defaultRowCount = DefaultDetailRowCount;
            schema.createInstance = "createInstance";
            schema.elements = childrenObject.body.elements;
            schema.fields = childrenObject.fields;
            
            return schema;
        }
    }
}