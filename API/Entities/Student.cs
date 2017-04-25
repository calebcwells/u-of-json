using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UofJson.API.Entities
{
    public class Student
    {
		public int Id { get; set; }
		public string First { get; set; }
		public string Last { get; set; }
		public int Age { get; set; }
		public string Address { get; set; }
		public string City { get; set; }
		public string State { get; set; }
		public string Zip { get; set; }
		public string Email { get; set; }
		public int GradYear { get; set; }
	}
}
