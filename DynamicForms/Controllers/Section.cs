using System.Collections.Generic;
using System.Collections.ObjectModel;
using DynamicForms.Lib.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace DynamicForms.Controllers
{
    [Route("api/[controller]")]
    public class Section : Controller
    {
        private Project GetProject(string query)
        {
            /*
                use query string to determine what project to use.
                these are just hardcoded but you will need to load the work order and do comparisons as defined on the query
            */

            return GenericFormMain.Instance.Project(query.Contains("R00100") ? 1 : 2);
        }
        
        [HttpGet]
        public string Get()
        {
            var queryString = Request.QueryString.Value;
            GenericFormMain.Instance.CurrentProject = GetProject(queryString);
            
            var result = new List<ResultSection>();

            var sections = GenericFormMain.Instance.CurrentProject.ClientSessions;

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
            var section = GenericFormMain.Instance.CurrentProject.Section(id);
            return section.ToSchema();
        }

        [HttpPost]
        public void Post([FromBody] JArray value)
        {
            var dynamicCollection = value.ToObject<dynamic[]>();

            // create pdf
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