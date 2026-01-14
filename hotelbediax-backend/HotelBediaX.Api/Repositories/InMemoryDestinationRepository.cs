using HotelBediaX.Api.Models;

namespace HotelBediaX.Api.Repositories;

public class InMemoryDestinationRepository : IDestinationRepository
{
    private readonly List<Destination> _data = new();
    private int _id = 1;

    public Task<List<Destination>> GetAllAsync(string? filter)
    {
        var result = string.IsNullOrWhiteSpace(filter)
            ? _data
            : _data.Where(d => d.Name.Contains(filter, StringComparison.OrdinalIgnoreCase)).ToList();

        return Task.FromResult(result);
    }

    public Task<Destination?> GetByIdAsync(int id)
        => Task.FromResult(_data.FirstOrDefault(d => d.Id == id));

    public Task<Destination> CreateAsync(Destination destination)
    {
        destination.Id = _id++;
        destination.LastModification = DateTime.UtcNow;
        _data.Add(destination);
        return Task.FromResult(destination);
    }

    public Task<bool> UpdateAsync(int id, Destination destination)
    {
        var existing = _data.FirstOrDefault(d => d.Id == id);
        if (existing == null) return Task.FromResult(false);

        existing.Name = destination.Name;
        existing.Description = destination.Description;
        existing.CountryCode = destination.CountryCode;
        existing.Type = destination.Type;
        existing.LastModification = DateTime.UtcNow;

        return Task.FromResult(true);
    }

    public Task<bool> DeleteAsync(int id)
    {
        var dest = _data.FirstOrDefault(d => d.Id == id);
        if (dest == null) return Task.FromResult(false);

        _data.Remove(dest);
        return Task.FromResult(true);
    }
}
