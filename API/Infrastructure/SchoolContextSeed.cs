using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UofJson.API.Models;

namespace UofJson.API.Infrastructure
{
	public static class SchoolContextSeed
	{
		public static void SeedContext(this SchoolContext context)
		{
			context.Database.Migrate();

			if (!context.Courses.Any())
			{
				var courses = new List<Course>() {
					new Course()
					{
						Name = "ECON100"
					},
					new Course()
					{
						Name = "HIST100"
					},
					new Course()
					{
						Name = "MATH101"
					},
					new Course()
					{
						Name = "MATH102"
					},
					new Course()
					{
						Name = "MATH103"
					}
				};

				context.Courses.AddRange(courses);
			}

			if (!context.Grades.Any())
			{
				var grades = new List<Grade>()
				{
					new Grade()
					{
						Value = "A"
					},
					new Grade()
					{
						Value = "B"
					},
					new Grade()
					{
						Value = "C"
					},
					new Grade()
					{
						Value = "D"
					},
					new Grade()
					{
						Value = "F"
					},
					new Grade()
					{
						Value = "I"
					}
				};

				context.Grades.AddRange(grades);
			}

			if (!context.Students.Any())
			{
				var students = new List<Student>()
				{
					new Student()
					{
						First = "Herbert",
						Last = "Becker",
						Age = 35,
						Address = "271 Evacat Terrace",
						City = "Lodofaj",
						State = "VA",
						Zip = "45204",
						Email = "cif@uvecozma.bz",
						GradYear = 2020
					},
					new Student()
					{
						First = "Lizzie",
						Last = "James",
						Age = 48,
						Address = "1934 Evasi Road",
						City = "Bavcabe",
						State = "KS",
						Zip = "28251",
						Email = "sivihele@teche.in",
						GradYear = 2020
					},
					new Student()
					{
						First = "Jeremy",
						Last = "Barnett",
						Age = 45,
						Address = "711 Cipe Street",
						City = "Ruktureh",
						State = "MN",
						Zip = "19654",
						Email = "imi@uwvinec.ls",
						GradYear = 2019
					},
					new Student()
					{
						First = "Maggie",
						Last = "Hayes",
						Age = 46,
						Address = "1241 Elfu Road",
						City = "Heugouja",
						State = "OR",
						Zip = "94230",
						Email = "mup@miza.th",
						GradYear = 2019
					},
					new Student()
					{
						First = "Georgie",
						Last = "Barnett",
						Age = 26,
						Address = "1448 Jeleva Circle",
						City = "Zekalduc",
						State = "LA",
						Zip = "74210",
						Email = "dilo@lekpuze.se",
						GradYear = 2020
					},
					new Student()
					{
						First = "Ora",
						Last = "Riley",
						Age = 64,
						Address = "301 Lihe Heights",
						City = "Anmacko",
						State = "MO",
						Zip = "25912",
						Email = "orucar@kefzegote.ck",
						GradYear = 2019
					},
					new Student()
					{
						First = "Sarah",
						Last = "Rivera",
						Age = 21,
						Address = "619 Popep Highway",
						City = "Wedofkun",
						State = "TN",
						Zip = "15564",
						Email = "fodahsu@joleggi.mz",
						GradYear = 2019
					},
					new Student()
					{
						First = "Victor",
						Last = "Parks",
						Age = 53,
						Address = "1317 Uchac Ridge",
						City = "Adgenhev",
						State = "IA",
						Zip = "75517",
						Email = "hol@ul.aw",
						GradYear = 2017
					},
					new Student()
					{
						First = "Wayne",
						Last = "Hansen",
						Age = 57,
						Address = "1413 Bigri Place",
						City = "Gihteig",
						State = "AZ",
						Zip = "74658",
						Email = "laj@unu.zw",
						GradYear = 2020
					},
					new Student()
					{
						First = "Jason",
						Last = "Peterson",
						Age = 35,
						Address = "1728 Padiv Lane",
						City = "Zakajug",
						State = "MI",
						Zip = "46286",
						Email = "nuhhemi@ja.co.uk",
						GradYear = 2017
					}
				};

				context.Students.AddRange(students);
			}

			context.SaveChanges();
		}
	}
}
