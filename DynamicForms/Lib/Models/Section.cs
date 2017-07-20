using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using DynamicForms.Lib.Interfaces;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace DynamicForms.Lib.Models
{
    public class Section : ISection
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FileName { get; set; }
        
        public List<SectionItem> Items { get; set; }

        public Section()
        {
            Items = new List<SectionItem>();
        }
        
        public void Parse(string csv)
        {
            string[] result = csv.Split(';');
            
            Id = Int32.Parse(result[0]);
            Name = result[1];
            Description = result[2];
            FileName = result[3];

            LoadItemsFromFile();
        }

        public void ToPdf(List<FieldValue> values)
        {
            foreach (var value in values)
            {
                var item = this.Items.Find(i => i.Name == value.Field);
                item.Value = value.Value;
            }
            
            // Generate PDF Content from Items Property using each 
        }
        
        private void LoadItemsFromFile()
        {
            var reader = File.OpenText("./Form-Data/" + FileName);

            while (reader.Peek() >= 0)
            {
                var csv = reader.ReadLine();
                SectionItem item = new SectionItem();
                item.Parse(csv);
                Items.Add(item);
            }                        
            
            Console.WriteLine("Section: " + Name);
            Console.WriteLine("Count: " + Items.Count);
        }

        public dynamic ToSchema()
        {
            dynamic form = new ExpandoObject();
            
            form.fields = GetFieldMap();
            form.body = new ExpandoObject();
            form.body.elements = new List<ExpandoObject>();

            foreach (SectionItem item in Items)
            {
                form.body.elements.Add(item.ToSchema());
            }
            
            return JsonConvert.SerializeObject(form);
        }

        private List<FieldMap> GetFieldMap()
        {
            var result = new List<FieldMap>();
            
            foreach (SectionItem item in Items)
            {
                result.Add(new FieldMap(item.Name));
            }
            
            return result;
        }        
    }

    class FieldMap
    {
        // These must be lowecase so that it is appropriate casing on the client side.
        public string field { get; set; }
        public string map { get; set; }

        public FieldMap(string fieldName)
        {
            field = fieldName;
            map = fieldName;
        }
    }
}