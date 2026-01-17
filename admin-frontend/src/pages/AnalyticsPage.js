// src/pages/AnalyticsPage.js

import React, {useState,useEffect} from 'react';
import {collection,query,onSnapshot} from "firebase/firestore";
import {db} from "../lib/firebaseconfig";
import {Row,Col,Card} from 'react-bootstrap';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement} from 'chart.js';
import {Bar,Pie} from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AnalyticsPage = () => {
    const [issues, setIssues] =useState([]);
    const [loading, setLoading] =useState(true);

    //fetch all issues from Firestore
    useEffect(() => {
        const q = query(collection(db, "reports"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const issuesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setIssues(issuesData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching issues:", error);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    //Data Processing for KPIs and Charts

    // Calculate KPIs
    const totalIssues = issues.length;
    const resolvedIssues = issues.filter(issue => issue.status === 'Resolved').length;
    const pendingIssues = issues.filter(issue => issue.status === 'pending').length;
    const inProgressIssues = issues.filter(issue => issue.status === 'In Progress').length;

    // Process data for charts
    const statusCounts = issues.reduce((acc, issue) => {
        acc[issue.status] = (acc[issue.status] || 0) + 1;
        return acc;
    }, {});

    const priorityCounts = issues.reduce((acc, issue) => {
        acc[issue.priority] = (acc[issue.priority] || 0) + 1;
        return acc;
    }, {});

    //charts
    const statusChartData = {
        labels: Object.keys(statusCounts),
        datasets: [{
            label: 'Issues by Status',
            data: Object.values(statusCounts),
            backgroundColor: ['#ffc107', '#198754', '#0dcaf0', '#6c757d'],
        }],
    };
    
    const priorityChartData = {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [{
            label: 'Issues by Priority',
            data: [
                priorityCounts['Low'] || 0,
                priorityCounts['Medium'] || 0,
                priorityCounts['High'] || 0,
                priorityCounts['Critical'] || 0
            ],
            backgroundColor: ['#5cb85c', '#0275d8', '#f0ad4e', '#d9534f'],
        }],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                font: { size: 16 }
            },
        },
    };
    
    if (loading) {
        return <div className="p-4 text-center">Loading analytics data...</div>;
    }

    return (
        <div className="analytics-page">
            <h2 className="main-title">Analytics & Reports</h2>
            <p className="subtitle">Visual summary of all reported issues.</p>
            
            {/* KPI Cards */}
            <Row className="summary-cards mt-4 g-4">
                <Col md={3}><Card className="summary-card"><Card.Body><span className="card-title">Total Issues</span><h3 className="card-value">{totalIssues}</h3></Card.Body></Card></Col>
                <Col md={3}><Card className="summary-card"><Card.Body><span className="card-title">Resolved</span><h3 className="card-value">{resolvedIssues}</h3></Card.Body></Card></Col>
                <Col md={3}><Card className="summary-card"><Card.Body><span className="card-title">Pending</span><h3 className="card-value">{pendingIssues}</h3></Card.Body></Card></Col>
                <Col md={3}><Card className="summary-card"><Card.Body><span className="card-title">In Progress</span><h3 className="card-value">{inProgressIssues}</h3></Card.Body></Card></Col>
            </Row>

            {/* Charts Section */}
            <Row className="mt-5 g-4">
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Bar options={{...chartOptions, title: {...chartOptions.plugins.title, text: 'Issues by Priority'}}} data={priorityChartData} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Pie options={{...chartOptions, title: {...chartOptions.plugins.title, text: 'Issues by Status'}}} data={statusChartData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AnalyticsPage;
