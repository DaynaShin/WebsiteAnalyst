import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, BarChart } from 'recharts';
import { 
  AlertCircle, 
  Download, 
  History, 
  Settings, 
  Loader2,
  BarChart2,
  Globe,
  Users,
  Zap,
  Palette
} from 'lucide-react';

const AnalyzerDashboard = () => {
  const [activeTab, setActiveTab] = useState("analyze");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 네비게이션 바 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="ml-2 text-lg font-semibold">웹사이트 분석 도구</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                설정
              </Button>
              <Button variant="outline" size="sm">
                <History className="w-4 h-4 mr-2" />
                히스토리
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="analyze">분석 시작</TabsTrigger>
            <TabsTrigger value="results">결과</TabsTrigger>
            <TabsTrigger value="compare">비교 분석</TabsTrigger>
            <TabsTrigger value="reports">리포트</TabsTrigger>
          </TabsList>

          <TabsContent value="analyze" className="space-y-6">
            {/* 분석 설정 카드 */}
            <Card>
              <CardHeader>
                <CardTitle>웹사이트 분석</CardTitle>
                <CardDescription>
                  분석할 웹사이트 URL과 옵션을 선택해주세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* URL 입력 필드 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">웹사이트 URL</label>
                    <div className="flex space-x-2">
                      <input 
                        type="url" 
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="https://example.com"
                      />
                      <Button type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            분석 중
                          </>
                        ) : '분석 시작'}
                      </Button>
                    </div>
                  </div>

                  {/* 분석 옵션 그리드 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="hover:border-blue-500 cursor-pointer transition-colors">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium flex items-center">
                          <BarChart2 className="w-4 h-4 mr-2" />
                          성능 분석
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• 로딩 속도</li>
                          <li>• 코어 웹 바이탈</li>
                          <li>• SEO 점수</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:border-blue-500 cursor-pointer transition-colors">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          사용자 경험
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• 사용성 분석</li>
                          <li>• 접근성 검사</li>
                          <li>• 사용자 흐름</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:border-blue-500 cursor-pointer transition-colors">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          기술 분석
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• 사용 기술</li>
                          <li>• 보안 점검</li>
                          <li>• 모바일 최적화</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:border-blue-500 cursor-pointer transition-colors">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Palette className="w-4 h-4 mr-2" />
                          디자인 분석
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• 색상 분석</li>
                          <li>• 타이포그래피</li>
                          <li>• 레이아웃 구조</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* 진행 상황 카드 */}
            {loading && (
              <Card>
                <CardHeader>
                  <CardTitle>분석 진행 상황</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={analysisProgress} className="mb-2" />
                  <p className="text-sm text-gray-500">
                    {analysisProgress}% 완료
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="results">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 성능 스코어 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle>성능 스코어</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">로딩 속도</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">모바일 최적화</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">SEO 점수</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 사용자 경험 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle>사용자 경험</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">접근성</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <Progress value={88} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">사용성</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">반응형 디자인</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compare">
            <Card>
              <CardHeader>
                <CardTitle>경쟁사 비교 분석</CardTitle>
                <CardDescription>
                  주요 지표별 경쟁사 비교 결과입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">1위</div>
                      <div className="text-sm text-gray-500">전체 순위</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">92%</div>
                      <div className="text-sm text-gray-500">성능 점수</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">88%</div>
                      <div className="text-sm text-gray-500">사용자 만족도</div>
                    </div>
                  </div>

                  <div className="h-64">
                    {/* 차트는 실제 데이터로 교체 필요 */}
                    <div className="text-center text-gray-500">
                      비교 차트가 이 위치에 표시됩니다
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>분석 리포트</CardTitle>
                <CardDescription>
                  상세 분석 리포트를 다운로드할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* 리포트 목록 */}
                  <div className="border rounded-lg divide-y">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">종합 분석 리포트</h3>
                        <p className="text-sm text-gray-500">2024-11-21</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        다운로드
                      </Button>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">성능 최적화 리포트</h3>
                        <p className="text-sm text-gray-500">2024-11-21</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        다운로드
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AnalyzerDashboard;
