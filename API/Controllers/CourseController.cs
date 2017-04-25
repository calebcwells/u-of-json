using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace UofJson.API.Controllers
{
	[Route("api/")]
	public class CourseController : Controller
	{
		private readonly SchoolContext _schoolContext;

		public CourseController(SchoolContext context)
		{
			_schoolContext = context;

			context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> Courses()
		{
			var courses = await _schoolContext.Courses.ToListAsync();

			return Ok(courses);
		}
	}
}
