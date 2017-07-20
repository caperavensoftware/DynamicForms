using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch.Internal;
using Newtonsoft.Json.Linq;

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