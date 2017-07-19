using System.Collections.Generic;
using DynamicForms.Lib.Models;

namespace DynamicForms.Lib.Interfaces
{
    public interface IForm
    {
        List<Section> Sections { get; set; }
        void LoadFromFile();        
    }
}