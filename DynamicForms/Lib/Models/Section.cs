﻿using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using DynamicForms.Lib.Interfaces;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using Xfinium.Pdf;
using Xfinium.Pdf.FlowDocument;

namespace DynamicForms.Lib.Models
{
    public class Section : ISection
    {        
        public Section()
        {
            Items = new List<SectionItem>();
        }

        public string FileName { get; set; }

        public List<SectionItem> Items { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDetail { get; set; }

        public void Parse(string csv)
        {
            var result = csv.Split(';');

            Id = int.Parse(result[0]);
            Name = result[1];
            Description = result[2];
            FileName = result[3];
            IsDetail = false;

            if (result.Length > 4)
            {
                IsDetail = result[4] == "detail";
            }

            LoadItemsFromFile();
        }

        public dynamic ToSchema()
        {
            dynamic form = new ExpandoObject();

            form.fields = GetFieldMap();
            form.datasources = new List<ExpandoObject>();
            form.body = new ExpandoObject();
            form.body.elements = new List<ExpandoObject>();

            var currentParent = form.body.elements;

            foreach (var item in Items)
            {
                dynamic schema =  ((IDictionary<String, Object>) item.ToSchema());

                if (schema.element == "endgroup")
                {
                    currentParent = form.body.elements;
                }
                else if (schema.element == "group")
                {
                    form.body.elements.Add(schema);

                    schema.elements = new List<ExpandoObject>();
                    currentParent = schema.elements;
                }
                else
                {
                    currentParent.Add(schema);
                }

                if (schema.element == "details")
                {
                    dynamic datasource = new ExpandoObject();
                    datasource.id = schema.datasource;
                    datasource.defaultRowCount = schema.defaultRowCount;
                    datasource.fields = schema.fields;
                    form.datasources.Add(datasource);
                }
            }
                

            return JsonConvert.SerializeObject(form);
        }

        private void LoadItemsFromFile()
        {
            var reader = File.OpenText("./Form-Data/" + FileName);

            while (reader.Peek() >= 0)
            {
                var csv = reader.ReadLine();
                var item = new SectionItem();
                item.Parse(csv);
                Items.Add(item);
            }

            Console.WriteLine("Section: " + Name);
            Console.WriteLine("Count: " + Items.Count);
        }

        private List<FieldMap> GetFieldMap()
        {
            var result = new List<FieldMap>();

            foreach (var item in Items)
                result.Add(new FieldMap(item.Name));

            return result;
        }
    }

    internal class FieldMap
    {
        public FieldMap(string fieldName)
        {
            field = fieldName;
            map = fieldName;
        }

        // These must be lowecase so that it is appropriate casing on the client side.
        public string field { get; set; }

        public string map { get; set; }
    }
}