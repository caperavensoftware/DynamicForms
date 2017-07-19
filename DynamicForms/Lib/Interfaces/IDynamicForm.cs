namespace DynamicForms.Lib.Interfaces
{
    public interface IDynamicForm
    {
        int Id { get; set; }
        string Name { get; set; }

        void Parse(string csv);
        dynamic ToSchema();
    }
}