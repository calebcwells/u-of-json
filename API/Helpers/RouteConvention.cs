﻿using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UofJson.API.Helpers
{
	public class RouteConvention : IApplicationModelConvention
	{
		private readonly AttributeRouteModel _centralPrefix;

		public RouteConvention(IRouteTemplateProvider routeTemplateProvider)
		{
			_centralPrefix = new AttributeRouteModel(routeTemplateProvider);
		}

		public void Apply(ApplicationModel application)
		{
			foreach (var controller in application.Controllers)
			{
				var matchedSelectors = controller.Selectors.Where(x => x.AttributeRouteModel != null).ToList();
				if (matchedSelectors.Any())
				{
					foreach (var selectorModel in matchedSelectors)
					{
						selectorModel.AttributeRouteModel = AttributeRouteModel.CombineAttributeRouteModel(_centralPrefix,
							selectorModel.AttributeRouteModel);
					}
				}

				var unmatchedSelectors = controller.Selectors.Where(x => x.AttributeRouteModel == null).ToList();
				if (unmatchedSelectors.Any())
				{
					foreach (var selectorModel in unmatchedSelectors)
					{
						selectorModel.AttributeRouteModel = _centralPrefix;
					}
				}
			}
		}
	}
}