import React, {useEffect, useState, useRef } from "react";
import "./itermap.scss"
const { kakao } = window;


const Itermap = (props) => {
    const { postlocation } = props
    let temp="";
    const [lat, setLat] = useState(35.1782720807211);
    const [lon, setLon] = useState(126.90176721598525);
    const [searchValue, setsearchValue] = useState("");
    let latLon = [lat, lon];
    let input = document.getElementById("input");
    
    // 현재 위치 찍어주는 함수(웹페이지에서 사용자 동의를 얻음)
    function currentLocation() {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
        } else{
            console.log("현재 위치를 알 수 없어 기본 위치로 이동합니다.");
            setLat(33.462182094543486);
            setLon(126.32865029284024);
        }
    };

    // 검색 상자 안 밸류값 받아오기
    function changeLocation(e){
            temp = e.target.value;
    }

    // 검색 버튼을 클릭 시 검색한 장소 지도에 마커
    function callUse(){
        if(temp===""){
            setsearchValue(postlocation);
        } else{
            setsearchValue(temp);
        }
    }
    
    // 초기화 버튼
    function resetMap(){
        
        input.value = null;
        temp = "";
        setsearchValue("");
    }

    // 초기 지도 화면(현재 위치)
    useEffect( () => {
        currentLocation();
        
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };
        let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    }, [latLon]);

    // 검색 버튼을 클릭 후 지도에 표시
    useEffect( () => {
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});

        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };
        let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


        let geocoder = new kakao.maps.services.Geocoder(); // 장소 검색 객체를 생성합니다

        geocoder.addressSearch(searchValue, placesSearchCB)
        
        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

            
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            let coords = new kakao.maps.LatLng(data[0].y, data[0].x);

            displayMarker(coords);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setCenter(coords);
            };
        };

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
    
            // 마커를 생성하고 지도에 표시합니다
            let marker = new kakao.maps.Marker({
                map: map,
                position: place
            });

            // let infowindow = new kakao.maps.InfoWindow({
            //     content : `<div style="width:150px;text-align:center;padding:6px 0;">${temp}</div>`
            // });
            // infowindow.open(map, marker);

            // // 마커에 클릭이벤트를 등록합니다
            // kakao.maps.event.addListener(marker, 'click', function() {
            //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            //     infowindow.open(map, marker);
            // });
        };

    }, [searchValue]);

    


    return(
        <>
        <div className="bu">
        <input type="text" id="input" placeholder="빈 공간 검색시 사진 위치로" onChange={changeLocation}></input>
        <button onClick={callUse} >검색</button>
        <button onClick={resetMap}>초기화</button>
        </div>
        <div id="map"></div>
        </>
    );
};

export default Itermap;


