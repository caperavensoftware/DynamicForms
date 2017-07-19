﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace DynamicForms.Controllers
{
    [Route("api/[controller]")]
    public class Section : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] {"value1", "value2"};
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
    }
}