using DynamicForms.Lib.Interfaces;
using Newtonsoft.Json.Linq;

namespace DynamicForms.Lib.Models
{
    public class SectionItem: ISectionItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public object Value { get; set; }

        public void Parse(string csv)
        {
            throw new System.NotImplementedException();
        }

        public JObject ToSchema()
        {
            throw new System.NotImplementedException();
        }
    }
}