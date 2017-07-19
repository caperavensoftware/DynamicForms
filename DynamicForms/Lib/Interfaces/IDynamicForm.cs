using Microsoft.AspNetCore.JsonPatch.Internal;
using Newtonsoft.Json.Linq;

namespace DynamicForms.Lib
{
    public interface IDynamicForm
    {
        int Id { get; set; }
        string Name { get; set; }

        void Parse(string csv);
        JObject ToSchema();
    }
}