using DynamicForms.Lib.Models;

namespace DynamicForms.Lib.Interfaces
{
    public interface IForm
    {
        Section[] Sections { get; set; }
        void LoadFromFile();        
    }
}