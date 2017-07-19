using DynamicForms.Lib.Interfaces;
using Newtonsoft.Json.Linq;

namespace DynamicForms.Lib.Models
{
    public class Section : ISection
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        
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