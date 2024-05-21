package net.javacoursework.emsbackend.mapper;

import net.javacoursework.emsbackend.dto.desktopDto;
import net.javacoursework.emsbackend.entity.desktop;

public class desktopMapper {
    public static desktopDto mapTodesktopDto(desktop desktop){
        return new desktopDto(
                desktop.getId(),
                desktop.getName(),
                desktop.getOrganization()
        );
    }

    public static desktop mapTodesktop(desktopDto desktopDto){
        return new desktop(
                desktopDto.getId(),
                desktopDto.getName(),
                desktopDto.getOrganization()
        );
    }
}
