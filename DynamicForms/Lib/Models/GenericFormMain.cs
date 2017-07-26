using System.Collections.Generic;
using System.IO;
using DynamicForms.Lib.Interfaces;

namespace DynamicForms.Lib.Models
{
    public class GenericFormMain: IForm
    {
        public List<Project> Projects { get; set; }
        public Project CurrentProject { get; set; }
        
        private static GenericFormMain instance;
        
        public static GenericFormMain Instance
        {
            get { return instance ?? (instance = new GenericFormMain()); }
        }

        public GenericFormMain()
        {
            Projects = new List<Project>();
        }
                      
        
        public void LoadFromFile()
        {           
            var reader = File.OpenText("./Form-Data/projects.csv");

            while (reader.Peek() >= 0)
            {                
                var csv = reader.ReadLine();
                Project project = new Project();
                project.Parse(csv);
                Projects.Add(project);
            }                                                
        }

        public Project Project(int id)
        {
            return Projects.Find(item => item.Id == id);
        }        
    }        
}