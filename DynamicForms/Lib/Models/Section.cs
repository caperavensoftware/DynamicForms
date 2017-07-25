using System;
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
        /// <summary>
        ///     Constructor
        /// </summary>
        public Section()
        {
            Items = new List<SectionItem>();
        }

        public string FileName { get; set; }

        public List<SectionItem> Items { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        /// <summary>
        ///     Parse csv string and initialize the section from that text
        /// </summary>
        /// <param name="csv">Comma seperated string list to process</param>
        public void Parse(string csv)
        {
            var result = csv.Split(';');

            Id = int.Parse(result[0]);
            Name = result[1];
            Description = result[2];
            FileName = result[3];

            LoadItemsFromFile();
        }

        /// <summary>
        ///     Save this section to a schema to be used by client
        /// </summary>
        /// <returns></returns>
        public dynamic ToSchema()
        {
            dynamic form = new ExpandoObject();

            form.fields = GetFieldMap();
            form.body = new ExpandoObject();
            form.body.elements = new List<ExpandoObject>();

            dynamic heading = new ExpandoObject();
            heading.element = "h2";
            heading.content = Name;

            var currentParent = form.body.elements;
            
            currentParent.Add(heading);

            foreach (var item in Items)
            {
                dynamic schema =  ((IDictionary<String, Object>) item.ToSchema());

                if (schema.element == "group")
                {
                    form.body.elements.Add(schema);

                    schema.elements = new List<ExpandoObject>();
                    currentParent = schema.elements;
                }
                else
                {
                    currentParent.Add(schema);
                }
            }
                

            return JsonConvert.SerializeObject(form);
        }

        /// <summary>
        ///     Update the items with the given values and generate pdf parts to use in the main document
        /// </summary>
        /// <param name="values"></param>
        /// <param name="page"></param>
        /// <param name="document"></param>
        public PdfPage ToPdf(List<FieldValue> values, PdfPage page, PdfFixedDocument document)
        {
            var printSheet = page ?? document.Pages.Add();

            PdfHelper.AddHeader(printSheet, document, Name);
                      
            PdfFlowTableContent table = new PdfFlowTableContent(2);
            table.MinRowHeight = 15;

            foreach (var value in values)
            {
                var item = Items.Find(i => i.Name == value.Field);
                item.Value = value.Value;

                item.ToPdf(printSheet, table);
            }


            return printSheet;
        }

        /// <summary>
        ///     Load schema from file and initialize it's items
        /// </summary>
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

        /// <summary>
        ///     Build client schema's fields section from the section items
        /// </summary>
        /// <returns></returns>
        private List<FieldMap> GetFieldMap()
        {
            var result = new List<FieldMap>();

            foreach (var item in Items)
                result.Add(new FieldMap(item.Name));

            return result;
        }
    }

    /// <summary>
    ///     Class that defines field map for client schema
    /// </summary>
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