using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UofJson.API.Models;

namespace UofJson.API.Infrastructure
{
    public class SchoolContext : DbContext
    {
		public SchoolContext(DbContextOptions<SchoolContext> options) : base(options)
        {
		}

		public DbSet<Student> Students { get; set; }
		public DbSet<Grade> Grades { get; set; }
		public DbSet<Course> Courses { get; set; }
		public DbSet<Roster> Rosters { get; set; }
	}
}
