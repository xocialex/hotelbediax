using HotelBediaX.Api.Models;

namespace HotelBediaX.Api.DTOs
{
    public class DestinationResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string CountryCode { get; set; } = string.Empty;
        public DestinationType Type { get; set; }
        public DateTime LastModification { get; set; }
    }
}
