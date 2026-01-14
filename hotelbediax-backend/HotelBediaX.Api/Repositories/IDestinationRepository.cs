using HotelBediaX.Api.Models;

namespace HotelBediaX.Api.Repositories;

public interface IDestinationRepository
{
    Task<List<Destination>> GetAllAsync(string? filter);
    Task<Destination?> GetByIdAsync(int id);
    Task<Destination> CreateAsync(Destination destination);
    Task<bool> UpdateAsync(int id, Destination destination);
    Task<bool> DeleteAsync(int id);
}
