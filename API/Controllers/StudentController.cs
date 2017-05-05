using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UofJson.API.Entities;
using System.Linq;

namespace UofJson.API.Controllers
{
	public class StudentController : Controller
	{
		private readonly SchoolContext _schoolContext;

		public StudentController(SchoolContext context)
		{
			_schoolContext = context;
			context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		}

		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> Students()
		{
			var students = await _schoolContext.Students.ToListAsync();
			return Ok(students);
		}

		[HttpGet]
		[Route("[action]/{studentId:int}")]
		public async Task<IActionResult> Student(int studentId)
		{
			var student = await _schoolContext.Students.Where(s => s.Id == studentId).FirstOrDefaultAsync();
			return Ok(student);
		}

		[HttpPost]
		[Route("[action]")]
		public void AddStudent([FromBody] Student student)
		{
			_schoolContext.Students.Add(student);
			_schoolContext.SaveChanges();
		}

		[HttpPut]
		[Route("[action]")]
		public void EditStudent([FromBody] Student student)
		{
			_schoolContext.ChangeTracker.TrackGraph(student, e => e.Entry.State = EntityState.Modified);
			_schoolContext.SaveChanges();
		}

		[HttpDelete]
		[Route("[action]/{studentId:int}")]
		public void DeleteStudent(int studentId)
		{
			var student = _schoolContext.Students.Find(studentId);
			_schoolContext.Entry(student).State = EntityState.Deleted;
			_schoolContext.SaveChanges();
		}
	}
}
