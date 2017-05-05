using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using UofJson.API.Entities;

namespace UofJson.API.Controllers
{
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

		[HttpGet]
		[Route("[action]/{gradeId:int}")]
		public async Task<IActionResult> Grade(int gradeId)
		{
			var grade = await _schoolContext.Grades.Where(g => g.Id == gradeId).FirstOrDefaultAsync();
			return Ok(grade);
		}

		[HttpPost]
		[Route("[action]")]
		public void AddGrade([FromBody] Grade grade)
		{
			_schoolContext.Grades.Add(grade);
			_schoolContext.SaveChanges();
		}

		[HttpPut]
		[Route("[action]")]
		public void EditGrade([FromBody] Grade grade)
		{
			_schoolContext.ChangeTracker.TrackGraph(grade, e => e.Entry.State = EntityState.Modified);
			_schoolContext.SaveChanges();
		}

		[HttpDelete]
		[Route("[action]/{gradeId:int}")]
		public void DeleteGrade(int gradeId)
		{
			var grade = _schoolContext.Grades.Find(gradeId);
			_schoolContext.Entry(grade).State = EntityState.Deleted;
			_schoolContext.SaveChanges();
		}
	}
}
