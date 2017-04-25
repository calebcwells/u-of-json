using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace UofJson.API.Controllers
{
	[Route("api/")]
	public class RosterController : Controller
	{
		private readonly SchoolContext _schoolContext;

		public RosterController(SchoolContext context)
		{
			_schoolContext = context;

			context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> Roster()
		{
			var roster = await _schoolContext.Rosters
				.Include(s => s.Student)
				.Include(c => c.Course)
				.Include(g => g.Grade)
				.ToListAsync();

			return Ok(roster);
		}
	}
}
