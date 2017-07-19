namespace DynamicForms.Lib.Interfaces
{
    public interface ISectionItem: IDynamicForm
    {
        string Label { get; set; }
        object Value { get; set; }
    }
}