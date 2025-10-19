import imotenImg from "../assets/imotenSignal02.png";
import pawpalImg from "../assets/pawpal04.jpg";
import masterAtlasImg from "../assets/masterAtlas01.jpg";

const projects = [
  {
    id: "imoten-signal",
    title: "Imoten Signal",
    image: imotenImg,
    description:
      `AI-powered real estate intelligence platform designed to help users find their dream property effortlessly through natural-language search.
        Users simply describe what they’re looking for — location, budget, and preferences — and the platform continuously works for them in the background, matching new listings daily until the ideal home is found.
        Built on Microsoft Azure, Imoten Signal leverages AI semantic search and automated matching pipelines to understand user intent and property context far beyond keyword filters.
        It integrates Azure Notification Hubs for instant alerts, Microsoft Entra for secure authentication, and provides custom dashboards and market analytics for real-estate agencies to track trends and lead performance.`,
    snippet: null,
  },
  {
    id: "pawpal",
    title: "PawPal",
    image: pawpalImg,
    description:
      `PawPal is a Microsoft Azure–based microservice ecosystem designed to reunite lost and found pets through AI-powered image similarity and serverless background processing.
      It uses Azure Functions to asynchronously compare newly posted “found” animal photos with existing “lost” entries, triggering instant push notifications via
      Azure Notification Hubs across its React web and React Native mobile apps (iOS & Android).
      Originally hosted on Heroku, PawPal was migrated to Azure to achieve enterprise-grade security, observability, and scalability.
      The platform is secured and routed through Azure API Management, with MongoDB handling data persistence and Liquibase managing schema versioning and migrations.
      All services are maintained in a private GitHub repository with internal NuGet packages providing shared infrastructure logic, domain utilities,
      and cross-service functionality—ensuring clean architecture and consistency across the .NET 8 backend.`,
    snippet: `public async Task<ResultT<IEnumerable<ListingResponse>>> GetAllListingsAsync(GetListingsRequest request)
{
    var dateValidationResult = ValidateDateFilters(request.FromDate, request.ToDate);
    if (!dateValidationResult.IsSuccess)
        return ResultT<IEnumerable<ListingResponse>>.Failure(dateValidationResult.Error);

    var listingsQuery = _listingsRepository.AsQueryable().Where(x => x.IsActive);
    listingsQuery = ApplyFilters(listingsQuery, request);

    // Exclude reserved listings if dates are provided
    if (request.FromDate is not null && request.ToDate is not null)
        listingsQuery = ExcludeReservedListings(listingsQuery, request.FromDate.Value, request.ToDate.Value);

    var orderedListings = listingsQuery.OrderByDescending(x => x.CreatedAt).ToList();

    var listingsResponseCollection = new List<ListingResponse>();

    if (_usersContextService.IsUserAuthorized())
    {
        // Add favorites information
        listingsResponseCollection = await MapListingsWithFavoritesAsync(orderedListings);
    }
    else
    {
        listingsResponseCollection = (await Task.WhenAll(orderedListings.Select(x => GetListingResponse(x)))).ToList();
    }

    return ResultT<IEnumerable<ListingResponse>>.Success(listingsResponseCollection);
}`,
  },
  {
    id: "master-atlas",
    title: "MasterAtlas",
    image: masterAtlasImg,
    description:
      `A Microsoft Azure cloud-based solution for the concrete industry,
      focusing on backend infrastructure and data processing.
      Utilized Azure Service Bus and Azure Functions to handle large volumes of data efficiently.
      Designed a comprehensive system that monitors the entire concrete delivery process,
      from truck departure to site pouring and return to the plant. Implemented real-time push notifications
      to alert stakeholders of any deviations in concrete characteristics, ensuring quality control throughout operations.`,
    snippet: null,
  },
];

export default projects;