import { useQuery } from "@tanstack/react-query";
import { PLATFORMS_CACHE_KEY } from "../utilities/constants";
import platformService from "../service/PlatformService";

const usePlatforms = () => {
  return useQuery({
    queryKey: PLATFORMS_CACHE_KEY,
    queryFn: platformService.getAll,
  });
};

export default usePlatforms;
