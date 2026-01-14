namespace HotelBediaX.Api.Models;

public class Destination
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public string CountryCode { get; set; } = "";
    public DestinationType Type { get; set; }
    public DateTime LastModification { get; set; }
}
