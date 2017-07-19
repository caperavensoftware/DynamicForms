using System;
using DynamicForms.Lib.Interfaces;
using Newtonsoft.Json.Linq;

namespace DynamicForms.Lib.Models
{
    public class Section : ISection
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FileName { get; set; }
        
        public void Parse(string csv)
        {
            string[] result = csv.Split(';');
            
            Id = Int32.Parse(result[0]);
            Name = result[1];
            Description = result[2];
            FileName = result[3];
        }

        public JObject ToSchema()
        {
            return null;
        }
    }
}