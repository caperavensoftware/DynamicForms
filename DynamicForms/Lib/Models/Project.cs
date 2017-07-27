using System;
using System.Collections.Generic;
using System.IO;

namespace DynamicForms.Lib.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PdfFileName { get; set; }
        public string CsvFileName { get; set; }
        public string Condition { get; set; }
        
        public List<Section> Sections { get; set; }

        public List<Section> ClientSessions
        {
            get
            {
                var result = new List<Section>();

                foreach (var section in Sections)
                {
                    string option = section.Option.ToLower();

                    if (option == "true" || option == "required")
                    {
                        if (PassesFilter(section))
                        {
                            result.Add(section);
                        }
                    }
                }
                
                return result;
            }
        }

        private bool PassesFilter(Section section)
        {
            /*
                if the section has a option parameter, check if this section passes the filter query then return true else return false
            */
            return true;
        }

        public void Parse(string csv)
        {
            var result = csv.Split(';');
            
            Id = Convert.ToInt32(result[0]);
            Name = result[1];
            PdfFileName = result[2];
            CsvFileName = result[3];
            Condition = result[4];

            LoadSections();
        }

        public void LoadSections()
        {
            Sections = new List<Section>();
            
            var reader = File.OpenText("./Form-Data/" + CsvFileName);

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