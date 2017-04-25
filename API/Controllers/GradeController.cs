using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace UofJson.API.Controllers
{
	[Route("api/")]
	public class GradeController : Controller
	{
		private readonly SchoolContext _schoolContext;

		public GradeController(SchoolContext context)
		{
			_schoolContext = context;

			context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> Grades()
		{
			var grades = await _schoolContext.Grades.ToListAsync();

			return Ok(grades);
		}
	}
}
