using System.Collections.Generic;
using DynamicForms.Lib.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DynamicForms.Controllers
{
    [Route("api/[controller]")]
    public class Section : Controller
    {
        [HttpGet]
        public string Get()
        {
            var result = new List<ResultSection>();

            var sections = Form.Instance.Sections;

            foreach (var section in sections)
            {
                result.Add(new ResultSection(section.Id, section.Name, section.Description));
            }
            
            var json = JsonConvert.SerializeObject(result);
            return json;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
    }

    class ResultSection
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ResultSection(int id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
        }
    }
}