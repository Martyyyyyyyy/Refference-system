package net.javacoursework.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.javacoursework.emsbackend.dto.desktopDto;
import net.javacoursework.emsbackend.exception.ResourceNotFoundException;
import net.javacoursework.emsbackend.mapper.componentsMapper;
import net.javacoursework.emsbackend.repository.desktopRepository;
import net.javacoursework.emsbackend.service.desktopsService;
import net.javacoursework.emsbackend.mapper.desktopMapper;
import org.springframework.stereotype.Service;
import net.javacoursework.emsbackend.entity.desktop;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class desktopServiceImpl implements desktopsService {

    private desktopRepository desktopRepository;

    @Override
    public desktopDto createDesktop(desktopDto componentDto) {
        desktop desk = desktopMapper.mapTodesktop(componentDto);
        desktop savedComponent = desktopRepository.save(desk);
        return  desktopMapper.mapTodesktopDto(savedComponent);
    }

    @Override
    public desktopDto getDesktopById(Long desktopId) {
        desktop desktop = desktopRepository.findById(desktopId)
                .orElseThrow(() -> new ResourceNotFoundException("Такого компонента не існує по цьому id: " + desktopId));
        return  desktopMapper.mapTodesktopDto(desktop);
    }

    @Override
    public List<desktopDto> getAllDesktops() {
        List<desktop> desk = desktopRepository.findAll();
        return desk.stream().map(desktopMapper::mapTodesktopDto)
                .collect(Collectors.toList());
    }

    @Override
    public desktopDto updateDesktop(Long desktopId, desktopDto updatedDesktop) {
        desktop desktop = desktopRepository.findById(desktopId).orElseThrow(
                () -> new ResourceNotFoundException("Такого комп'ютера не існує по цьому id: " + desktopId)
        );
        desktop.setName(updatedDesktop.getName());
        desktop.setOrganization(updatedDesktop.getOrganization());

        desktop updatedDesktopObj = desktopRepository.save(desktop);
        return desktopMapper.mapTodesktopDto(updatedDesktopObj);
    }

    @Override
    public void deleteDesktop(Long desktopId) {
        desktop desktop = desktopRepository.findById(desktopId).orElseThrow(
                () -> new ResourceNotFoundException("Такого комп'ютера не існує по цьому id: " + desktopId)
        );

        desktopRepository.deleteById(desktopId);
    }
}
