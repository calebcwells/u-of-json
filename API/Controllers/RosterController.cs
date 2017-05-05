using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using UofJson.API.Entities;
using UofJson.API.ViewModels;

namespace UofJson.API.Controllers
{
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
		public async Task<IActionResult> Rosters()
		{
			var rosters = await _schoolContext.Rosters
				.Include(s => s.Student)
				.Include(c => c.Course)
				.Include(g => g.Grade)
				.ToListAsync();

			return Ok(rosters);
		}

		[HttpGet]
		[Route("[action]/{studentId:int}")]
		public async Task<IActionResult> RostersByStudent(int studentId)
		{
			var rostersByStudent = await _schoolContext.Rosters
				.Include(s => s.Student)
				.Include(c => c.Course)
				.Include(g => g.Grade)
				.Where(s => s.StudentId == studentId)
				.ToListAsync();

			return Ok(rostersByStudent);
		}

		[HttpGet]
		[Route("[action]/{gradeId:int}")]
		public async Task<IActionResult> RostersByGrade(int gradeId)
		{
			var rostersByGrade = await _schoolContext.Rosters
				.Include(s => s.Student)
				.Include(c => c.Course)
				.Include(g => g.Grade)
				.Where(g => g.GradeId == gradeId)
				.ToListAsync();

			return Ok(rostersByGrade);
		}

		[HttpGet]
		[Route("[action]/{courseId:int}")]
		public async Task<IActionResult> RostersByCourse(int courseId)
		{
			var rostersByCourse = await _schoolContext.Rosters
				.Include(s => s.Student)
				.Include(c => c.Course)
				.Include(g => g.Grade)
				.Where(c => c.CourseId == courseId)
				.ToListAsync();

			return Ok(rostersByCourse);
		}

		[HttpPost]
		[Route("[action]")]
		public void AddRoster([FromBody] RosterViewModel roster)
		{
			var rosterEntity = new Roster()
			{
				StudentId = _schoolContext.Students.Where(s => s.Email == roster.Email).Select(s => s.Id).FirstOrDefault(),
				GradeId = _schoolContext.Grades.Where(g => g.Value == roster.Grade).Select(g => g.Id).FirstOrDefault(),
				CourseId = _schoolContext.Courses.Where(c => c.Name == roster.Course).Select(c => c.Id).FirstOrDefault()
			};

			_schoolContext.Rosters.Add(rosterEntity);
			_schoolContext.SaveChanges();
		}

		[HttpPut]
		[Route("[action]")]
		public void EditRoster([FromBody] RosterViewModel roster)
		{
			var rosterEntity = new Roster()
			{
				Id = roster.Id,
				StudentId = _schoolContext.Students.Where(s => s.Email == roster.Email).Select(s => s.Id).FirstOrDefault(),
				GradeId = _schoolContext.Grades.Where(g => g.Value == roster.Grade).Select(g => g.Id).FirstOrDefault(),
				CourseId = _schoolContext.Courses.Where(c => c.Name == roster.Course).Select(c => c.Id).FirstOrDefault()
			};

			_schoolContext.ChangeTracker.TrackGraph(rosterEntity, e => e.Entry.State = EntityState.Modified);
			_schoolContext.SaveChanges();
		}
		
		[HttpDelete]
		[Route("[action]/{rosterId:int}")]
		public void DeleteRoster(int rosterId)
		{
			var roster = _schoolContext.Rosters.Find(rosterId);
			_schoolContext.Entry(roster).State = EntityState.Deleted;
			_schoolContext.SaveChanges();
		}
	}
}
