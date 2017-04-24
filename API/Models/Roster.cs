using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UofJson.API.Models
{
    public class Roster
    {
		public int Id { get; set; }
		public int StudentId { get; set; }
		public int CourseId { get; set; }
		public int GradeId { get; set; }
	}
}
