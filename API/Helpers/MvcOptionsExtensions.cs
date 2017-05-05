using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UofJson.API.Helpers
{
    public static class MvcOptionsExtensions
    {
		public static void UseCentralRoutePrefix(this MvcOptions opts, IRouteTemplateProvider routeAttribute)
		{
			opts.Conventions.Insert(0, new RouteConvention(routeAttribute));
		}
	}
}
