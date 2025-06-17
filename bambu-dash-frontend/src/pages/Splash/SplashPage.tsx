import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { apiGet } from "@/api/index";
import { ErrorCode } from "@/constants/errorCodes";
import logo from "@/assets/images/bambu_lab_logo.png";

interface InitStatusResponse {
  success: boolean;
  data: {
    initStatus: boolean;
  };
  errorCode: number;
}

const SplashPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // 3초 대기 후 API 호출
    const timer = setTimeout(() => {
      setLoading(false); // 로딩 종료 (스피너 사라짐)
      fetchInitStatus();
    }, 3000);

    const fetchInitStatus = async () => {
      try {
        const response = await apiGet<InitStatusResponse>("/api/v1/system/init-status");

        if (response.errorCode === ErrorCode.SUCCESS) {
          if (response.data.data.initStatus) {
            navigate("/main");
          } else {
            navigate("/config/wifi");
          }
        } else {
          console.error("Invalid init status response");
        }
      } catch (error) {
        console.error("Init status API error:", error);
        setErrorMessage("No response from the server. Please check your server status.");

        // 에러 시 fallback 처리
      }
    };

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="white"
    >
      <img src={logo} alt="Logo" style={{ width: '40vw', height: 'auto', marginBottom: 24 }} />
      {loading && <CircularProgress sx={{ color: '#e4e4e4' }} />}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </Box>
  );
};

export default SplashPage;
