package net.javacoursework.emsbackend.service;

import net.javacoursework.emsbackend.dto.desktopDto;

import java.util.List;

public interface desktopsService {
    desktopDto createDesktop(desktopDto desktopDto);

    desktopDto getDesktopById(Long desktopId);

    List<desktopDto> getAllDesktops();

    desktopDto updateDesktop(Long desktopId, desktopDto updatedDesktop);

    void deleteDesktop(Long desktopId);

}
