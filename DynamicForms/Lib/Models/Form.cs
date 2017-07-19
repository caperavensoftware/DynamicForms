using System;
using System.Collections.Generic;
using System.IO;
using DynamicForms.Lib.Interfaces;

namespace DynamicForms.Lib.Models
{
    public class Form: IForm
    {
        private static Form instance;
        
        public static Form Instance
        {
            get { return instance ?? (instance = new Form()); }
        }

        public Form()
        { 
            Sections = new List<Section>();
        }
              
        public List<Section> Sections { get; set; }
        
        public void LoadFromFile()
        {           
            var reader = File.OpenText("./Form-Data/form.csv");

            while (reader.Peek() >= 0)
            {
                var csv = reader.ReadLine();
                Section section = new Section();
                section.Parse(csv);
                Sections.Add(section);
            }            
        }

        public Section Section(int id)
        {
            return Sections.Find(item => item.Id == id);
        }
    }        
}