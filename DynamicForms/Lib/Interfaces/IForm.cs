using System.Collections.Generic;
using DynamicForms.Lib.Models;

namespace DynamicForms.Lib.Interfaces
{
    public interface IForm
    {
        List<Project> Projects { get; set; }
        void LoadFromFile();        
    }
}