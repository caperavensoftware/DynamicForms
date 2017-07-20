namespace DynamicForms.Lib.Models
{
    public class FieldValue
    {
        public string Field { get; set; }
        public string Value { get; set; }

        public FieldValue(string field, string value)
        {
            this.Field = field;
            this.Value = value;
        }
    }
}