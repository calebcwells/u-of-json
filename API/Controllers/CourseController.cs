using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using UofJson.API.Entities;

namespace UofJson.API.Controllers
{
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

		[HttpGet]
		[Route("[action]/{courseId:int}")]
		public async Task<IActionResult> Course(int courseId)
		{
			var course = await _schoolContext.Courses.Where(c => c.Id == courseId).FirstOrDefaultAsync();
			return Ok(course);
		}

		[HttpPost]
		[Route("[action]")]
		public void AddCourse([FromBody] Course course)
		{
			_schoolContext.Courses.Add(course);
			_schoolContext.SaveChanges();
		}

		[HttpPut]
		[Route("[action]")]
		public void EditCourse([FromBody] Course course)
		{
			_schoolContext.ChangeTracker.TrackGraph(course, e => e.Entry.State = EntityState.Modified);
			_schoolContext.SaveChanges();
		}

		[HttpDelete]
		[Route("[action]/{courseId:int}")]
		public void DeleteCourse(int courseId)
		{
			var course = _schoolContext.Courses.Find(courseId);
			_schoolContext.Entry(course).State = EntityState.Deleted;
			_schoolContext.SaveChanges();
		}
	}
}
