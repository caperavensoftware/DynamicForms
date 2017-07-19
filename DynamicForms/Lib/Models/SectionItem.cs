using DynamicForms.Lib.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json.Linq;

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

        public string ToSchema()
        {
            return "";
        }
    }
}