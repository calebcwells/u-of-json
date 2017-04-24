using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UofJson.API.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace UofJson.API.Controllers
{
    [Route("api/[controller]")]
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
	}
}
