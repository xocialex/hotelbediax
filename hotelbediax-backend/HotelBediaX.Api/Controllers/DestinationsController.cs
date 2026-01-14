using HotelBediaX.Api.Models;
using HotelBediaX.Api.Repositories;
using HotelBediaX.Api.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace HotelBediaX.Api.Controllers;

[ApiController]
[Route("api/destinations")]
public class DestinationsController : ControllerBase
{
    private readonly IDestinationRepository _repo;

    public DestinationsController(IDestinationRepository repo)
    {
        _repo = repo;
    }

    [HttpGet]
    public async Task<ActionResult<List<DestinationResponseDto>>> GetAll([FromQuery] string? filter)
    {
        var destinations = await _repo.GetAllAsync(filter);
    
        var response = destinations.Select(d => new DestinationResponseDto
        {
            Id = d.Id,
            Name = d.Name,
            Description = d.Description,
            CountryCode = d.CountryCode,
            Type = d.Type,
            LastModification = d.LastModification
        }).ToList();

        return Ok(response);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<DestinationResponseDto>> GetById(int id)
    {
        var dest = await _repo.GetByIdAsync(id);
        if (dest == null) return NotFound();

        var response = new DestinationResponseDto
        {
            Id = dest.Id,
            Name = dest.Name,
            Description = dest.Description,
            CountryCode = dest.CountryCode,
            Type = dest.Type,
            LastModification = dest.LastModification
        };

        return Ok(response);
    }

    [HttpPost]
    public async Task<ActionResult<DestinationResponseDto>> Create(DestinationCreateDto dto)
    {
      
        var destination = new Destination
        {
            Name = dto.Name,
            Description = dto.Description,
            CountryCode = dto.CountryCode,
            Type = dto.Type
        };

        var created = await _repo.CreateAsync(destination);

        var response = new DestinationResponseDto
        {
            Id = created.Id,
            Name = created.Name,
            Description = created.Description,
            CountryCode = created.CountryCode,
            Type = created.Type,
            LastModification = created.LastModification
        };

        return CreatedAtAction(nameof(GetById), new { id = created.Id }, response);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, DestinationUpdateDto dto)
    {
        var destination = new Destination
        {
            Name = dto.Name,
            Description = dto.Description,
            CountryCode = dto.CountryCode,
            Type = dto.Type
        };

        var updated = await _repo.UpdateAsync(id, destination);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _repo.DeleteAsync(id);
        return deleted ? NoContent() : NotFound();
    }
}
